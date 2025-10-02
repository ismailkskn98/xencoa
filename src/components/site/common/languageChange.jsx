'use client';
import React, { useTransition } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { useSearchParams } from 'next/navigation';

export default function LanguageChange({ isScrolled, className }) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const locale = useLocale();
    const [isPending, startTransition] = useTransition();

    let currentSearchParams = {};
    searchParams.forEach((value, key) => {
        currentSearchParams[key] = value;
    })

    return (
        <article className='w-fit flex items-center pl-2'>
            <Select defaultValue={locale} onValueChange={(value) => {
                startTransition(() => {
                    router.replace({ pathname, query: currentSearchParams }, { scroll: false, locale: value })
                })
            }}>
                <SelectTrigger
                    className={className}
                >

                    <SelectValue />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="tr" className={"cursor-pointer"}>
                        <span className="flex flex-nowrap items-center gap-1.5 text-xs">
                            <Image src="https://flagcdn.com/24x18/tr.png" alt="Türkçe" width={24} height={18} className="h-3 w-4 object-cover" />
                            <span>Türkçe</span>
                        </span>
                    </SelectItem>
                    <SelectItem value="en" className={"cursor-pointer"}>
                        <span className="flex flex-nowrap items-center gap-1.5 text-xs">
                            <Image src="https://flagcdn.com/24x18/us.png" alt={"English"} width={24} height={18} className="h-3 w-4 object-cover" />
                            <span>English</span>
                        </span>
                    </SelectItem>
                </SelectContent>
            </Select>
        </article>
    )
}
