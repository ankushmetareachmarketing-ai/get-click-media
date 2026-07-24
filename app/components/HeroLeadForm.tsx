'use client';

import { useState, ChangeEvent, FormEvent, ReactNode, InputHTMLAttributes } from 'react';
import Image from 'next/image';
import toast from 'react-hot-toast';



const PRODUCTS = [
    'Bulk SMS',
    'WhatsApp Business API',
    'RCS Messaging',
    'IVR Solutions',
    'Voice Call / Bulk Voice',
    'Digital Marketing',
] as const;

type Product = (typeof PRODUCTS)[number];

interface HeroLeadFormProps {
    bannerSrc?: string;
    bannerAlt?: string;
}

interface LeadFormState {
    fullName: string;
    company: string;
    phone: string;
    email: string;
    product: Product | '';
    remarks: string;
    consent: boolean;
    newsletter: boolean;
}

type FormFieldKey = keyof LeadFormState;

const initialFormState: LeadFormState = {
    fullName: '',
    company: '',
    phone: '',
    email: '',
    product: '',
    remarks: '',
    consent: false,
    newsletter: false,
};

export default function HeroLeadForm({
    bannerSrc = '/images/contact-get-click-media.svg',
    bannerAlt = 'Business communication banner',
}: HeroLeadFormProps) {
    const [form, setForm] = useState<LeadFormState>(initialFormState);
    const [submitting, setSubmitting] = useState<boolean>(false);

    const update =
        (key: FormFieldKey) =>
            (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
                const target = e.target;
                const value =
                    target instanceof HTMLInputElement && target.type === 'checkbox'
                        ? target.checked
                        : target.value;
                setForm((prev) => ({ ...prev, [key]: value }));
            };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!form.consent) {
            toast.error('Please accept the consent checkbox to continue.');
            return;
        }
        try {
            setSubmitting(true);

            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: form.fullName,
                    email: form.email,
                    phone: form.phone,
                    company: form.company,
                    service: form.product,
                    message: form.remarks || `New hero form lead - interested in ${form.product || 'a service'}. Newsletter opt-in: ${form.newsletter ? 'yes' : 'no'}.`,
                }),
            });
            if (!res.ok) throw new Error('Request failed');

            toast.success("Thanks! We'll be in touch shortly.");
            setForm(initialFormState);
        } catch {
            toast.error('Something went wrong - please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section className="relative w-full overflow-hidden bg-slate-900">
            {/* Banner image */}
            <div className="relative w-full aspect-[9/16] lg:aspect-[16/7] lg:h-[780px]">
                <Image
                    src={bannerSrc}
                    alt={bannerAlt}
                    fill
                    priority
                    className="object-cover object-[30%_center]"
                />

                {/* subtle gradient so the card edge blends on desktop */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-transparent" />
            </div>
            {/* Form card- centered over the banner on all screen sizes */}
            <div
                className="
    absolute top-1/2 z-10
    left-1/2 -translate-x-1/2 -translate-y-1/2
    w-[92%] max-w-lg
    rounded-2xl bg-white p-6 shadow-2xl
    sm:w-[85%] sm:p-8
    lg:left-auto lg:right-[300px] lg:translate-x-0
    lg:flex lg:h-[640px] lg:w-[620px] lg:max-w-none lg:flex-col lg:justify-center lg:p-10
  "
            >
                <h2 className="text-[28px] font-bold leading-tight text-slate-900 sm:text-[32px]">
                    One message could
                    <br />
                    change your business.
                </h2>
                <p className="mt-3 text-[15px] text-slate-600">
                    Big or small, we power communication for all- talk to us today.
                </p>

                <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                    <div className="grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2">
                        <Field
                            label="Full name"
                            value={form.fullName}
                            onChange={update('fullName')}
                            required
                        />
                        <Field
                            label="Company"
                            value={form.company}
                            onChange={update('company')}
                        />
                        <Field
                            label="Phone number"
                            type="tel"
                            value={form.phone}
                            onChange={update('phone')}
                            required
                        />
                        <Field
                            label="Email ID"
                            type="email"
                            value={form.email}
                            onChange={update('email')}
                            required
                        />
                    </div>

                    <div>
                        <label className="block border-b border-slate-300 pb-2">
                            <span className="sr-only">Product Interested</span>
                            <select
                                value={form.product}
                                onChange={update('product')}
                                required
                                className="w-full appearance-none bg-transparent text-[15px] text-slate-700 outline-none"
                            >
                                <option value="" disabled>
                                    Product Interested
                                </option>
                                {PRODUCTS.map((p) => (
                                    <option key={p} value={p}>
                                        {p}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </div>

                    <Field
                        label="Remarks (optional)"
                        value={form.remarks}
                        onChange={update('remarks')}
                    />

                    <div className="space-y-3 pt-1">
                        <Checkbox
                            checked={form.consent}
                            onChange={update('consent')}
                            required
                        >
                            I consent to storing my submitted information in order to be
                            able to respond to my request.{' '}
                            <a href="#" className="text-orange-600 hover:underline">
                                Learn more
                            </a>
                        </Checkbox>

                        <Checkbox checked={form.newsletter} onChange={update('newsletter')}>
                            Sign me up for news and updates. I can update my preferences
                            or unsubscribe at any time.
                        </Checkbox>
                    </div>

                    <button
                        type="submit"
                        disabled={submitting}
                        className="mt-2 w-full rounded-full bg-slate-900 px-6 py-3.5 text-[15px] font-semibold text-white transition hover:bg-slate-800 disabled:opacity-60 sm:w-auto"
                    >
                        {submitting ? 'Sending…' : 'Talk to an expert'}
                    </button>
                </form>
            </div>
        </section>
    );
}

interface FieldProps {
    label: string;
    type?: InputHTMLAttributes<HTMLInputElement>['type'];
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
}

function Field({ label, type = 'text', value, onChange, required = false }: FieldProps) {
    return (
        <label className="block border-b border-slate-300 pb-2 focus-within:border-slate-900">
            <span className="sr-only">{label}</span>
            <input
                type={type}
                placeholder={label}
                value={value}
                onChange={onChange}
                required={required}
                className="w-full bg-transparent text-[15px] text-slate-700 placeholder:text-slate-500 outline-none"
            />
        </label>
    );
}

interface CheckboxProps {
    checked: boolean;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    children: ReactNode;
}

function Checkbox({ checked, onChange, required = false, children }: CheckboxProps) {
    return (
        <label className="flex cursor-pointer items-start gap-3 text-[13px] leading-relaxed text-slate-600">
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
                required={required}
                className="mt-0.5 h-4 w-4 flex-shrink-0 rounded border-slate-300 text-slate-900 focus:ring-slate-900"
            />
            <span>{children}</span>
        </label>
    );
}