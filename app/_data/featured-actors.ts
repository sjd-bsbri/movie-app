export interface FeaturedActor {
    id: number;
    name: string;
    imageUrl: string;
    bannerImageUrl: string; 
    birthDate: string;
    nationality: string;
    height: number; 
    awards: string[]; 
    socialMedia: { platform: 'instagram' | 'twitter'; url: string }[];
    bio: string;
    knownFor: number[];
}

const basePath = '/movie-app';

export const featuredActors: FeaturedActor[] = [
    {
        id: 1,
        name: 'لئوناردو دی‌کاپریو',
        imageUrl: `${basePath}/images/actors/dicaprio.jfif`,
        bannerImageUrl: `${basePath}/images/actors/dicaprio.jfif`,
        birthDate: '۱۱ نوامبر ۱۹۷۴',
        nationality: 'آمریکایی',
        height: 183,
        awards: ['جایزه اسکار بهترین بازیگر مرد', '۳ جایزه گلدن گلوب', 'جایزه فیلم بفتا'],
        socialMedia: [{ platform: 'instagram', url: 'https://instagram.com/dicaprio' }],
        bio: 'لئوناردو دی‌کاپریو بازیگر و تهیه‌کنندهٔ آمریکایی است. او برای بازی در ژانرهای گوناگون فیلم، جوایز متعددی برنده شده‌است. فیلم‌های او بیش از ۷٫۲ میلیارد دلار در سراسر جهان فروش داشته و نامش هشت بار در رتبه‌بندی‌های سالانهٔ پردرآمدترین بازیگران جهان قرار گرفته‌است.',
        knownFor: [7, 14],
    },
    {
        id: 2,
        name: 'مورگان فریمن',
        imageUrl: `${basePath}/images/actors/freeman.jpg`,
        bannerImageUrl: `${basePath}/images/actors/freeman.jpg`,
        birthDate: '۱ ژوئن ۱۹۳۷',
        nationality: 'آمریکایی',
        height: 188,
        awards: ['جایزه اسکار بهترین بازیگر نقش مکمل مرد', 'جایزه گلدن گلوب سیسیل بی دمیل', 'جایزه مرکز کندی'],
        socialMedia: [{ platform: 'twitter', url: 'https://twitter.com/freeman' }, { platform: 'instagram', url: 'https://instagram.com/freeman' }],
        bio: 'مورگان فریمن بازیگر و کارگردان آمریکایی است. او برای صدای عمیق و مهارت‌های روایی متمایزش شهرت دارد و در فیلم‌های ماندگاری چون «رستگاری در شاوشنک» و «هفت» به ایفای نقش پرداخته است.',
        knownFor: [1],
    },
    {
        id: 3,
        name: 'مت دیمون',
        imageUrl: `${basePath}/images/actors/matt-damon.jfif`,
        bannerImageUrl: `${basePath}/images/actors/matt-damon.jfif`,
        birthDate: '۸ اکتبر ۱۹۷۰',
        nationality: 'آمریکایی',
        height: 178,
        awards: ['جایزه اسکار بهترین فیلم‌نامه غیراقتباسی', '۲ جایزه گلدن گلوب'],
        socialMedia: [{ platform: 'twitter', url: 'https://twitter.com/matt-damon' }],
        bio: 'مت دیمون بازیگر، تهیه‌کننده و فیلم‌نامه‌نویس آمریکایی است. او در میان پردرآمدترین بازیگران تمام دوران قرار دارد و برای نقش‌هایش در «ویل هانتینگ خوب» و سری فیلم‌های «بورن» شناخته می‌شود.',
        knownFor: [14],
    },
    {
        id: 4,
        name: 'تام هنکس',
        imageUrl: `${basePath}/images/actors/tom-hanks.jpg`,
        bannerImageUrl: `${basePath}/images/actors/tom-hanks.jpg`,
        birthDate: '۹ ژوئیه ۱۹۵۶',
        nationality: 'آمریکایی',
        height: 183,
        awards: ['۲ جایزه اسکار بهترین بازیگر مرد', '۴ جایزه گلدن گلوب', 'نشان افتخار آزادی رئیس‌جمهوری'],
        socialMedia: [{ platform: 'instagram', url: 'https://instagram.com/tom-hanks' }, { platform: 'twitter', url: 'https://twitter.com/tom-hanks' }],
        bio: 'تام هنکس بازیگر و فیلم‌ساز آمریکایی است. او که به عنوان یکی از نمادهای فرهنگی آمریکا شناخته می‌شود، برای نقش‌های کمدی و دراماتیکش شهرت دارد. «فارست گامپ» و «نجات سرباز رایان» از جمله آثار برجسته او هستند.',
        knownFor: [6],
    },
    {
        id: 5,
        name: 'کیانو ریوز',
        imageUrl: `${basePath}/images/actors/kiano-reeves.jfif`,
        bannerImageUrl: `${basePath}/images/actors/kiano-reeves.jfif`,
        birthDate: '۲ سپتامبر ۱۹۶۴',
        nationality: 'کانادایی',
        height: 186,
        awards: ['جایزه سینمایی ام‌تی‌وی', 'ستاره در پیاده‌روی مشاهیر هالیوود'],
        socialMedia: [],
        bio: 'کیانو ریوز بازیگر کانادایی است. او با بازی در نقش نئو در سه‌گانه علمی-تخیلی «ماتریکس» و نقش جان ویک در سری فیلم‌های اکشن به همین نام، به شهرت جهانی رسید و به یکی از محبوب‌ترین بازیگران اکشن تبدیل شد.',
        knownFor: [8],
    },
    {
        id: 6,
        name: 'هیو جکمن',
        imageUrl: `${basePath}/images/actors/hugh-jackman.jpg`,
        bannerImageUrl: `${basePath}/images/actors/hugh-jackman.jpg`,
        birthDate: '۱۲ اکتبر ۱۹۶۸',
        nationality: 'استرالیایی',
        height: 188,
        awards: ['جایزه گلدن گلوب', 'جایزه تونی', 'جایزه گرمی'],
        socialMedia: [{ platform: 'instagram', url: 'https://instagram.com/hugh-jackman' }, { platform: 'twitter', url: 'https://twitter.com/hugh-jackman' }],
        bio: 'هیو جکمن بازیگر، خواننده و تهیه‌کننده استرالیایی است. او برای نقش ولورین در سری فیلم‌های مردان ایکس و همچنین بازی در فیلم موزیکال «بینوایان» شهرت جهانی دارد.',
        knownFor: [15],
    },
];