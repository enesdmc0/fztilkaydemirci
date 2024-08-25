import {
    IconBook2,
    IconCalendar,
    IconCalendarMonth,
    IconCertificate,
    IconExchange,
    IconHeartRateMonitor,
    IconHome,
    IconMessageCircle,
    IconMoodSmile,
    IconPhone,
    IconPhotoHeart,
    IconStethoscope,
    IconUserQuestion,
    IconVaccine,
    IconWomanFilled
} from "@tabler/icons-react";
import React from "react";
import Image from "next/image";
import {IconNames} from "@/lib/icon";

export const data1 = [
    "https://images.pexels.com/photos/8313222/pexels-photo-8313222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/20860598/pexels-photo-20860598/free-photo-of-physiotherapist-massaging-patient-back.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/20860621/pexels-photo-20860621/free-photo-of-woman-helping-patient-exercising.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

export const data2 = [
    {
        title: "Sana Özel Tedavi Planı",
        description:
            "Herkesin ihtiyacı farklıdır. Sana en uygun tedavi yöntemini belirleyip birebir ilgileniyorum.",
        icon: <IconCalendar/>,
    },
    {
        title: "Tecrübemle Yanındayım",
        description:
            "Yılların verdiği tecrübe ile seni dinliyorum ve en doğru tedaviyi bulmak için çabalıyorum.",
        icon: <IconStethoscope/>,
    },
    {
        title: "En Etkin Yöntemlerle Çalışıyorum",
        description:
            "Sürekli kendimi geliştiriyorum ve en güncel tedavi yöntemlerini senin için kullanıyorum.",
        icon: <IconBook2/>,
    },
    {
        title: "Samimiyet ve Güler Yüzle Yaklaşıyorum",
        description: "Tedavi sürecinde sıcak bir ortamda, rahatça iletişim kurabileceğin bir hizmet sunuyorum.",
        icon: <IconMoodSmile/>,
    },
    {
        title: "Modern Ekipmanlarla Hizmet Veriyorum",
        description: "Son teknoloji cihazlarla sana en iyi tedaviyi sağlamaya özen gösteriyorum.",
        icon: <IconHeartRateMonitor/>,
    },
    {
        title: "Sana Uygun Zamanlama",
        description:
            "Randevu konusunda esneklik sağlıyorum. Senin programına uyum sağlamak için buradayım.",
        icon: <IconCalendarMonth/>,
    },
    {
        title: "Bütünsel Bir Yaklaşım Sunuyorum",
        description:
            "Sadece ağrıyı değil, bu ağrının nedenini de birlikte çözmeye çalışıyoruz. Seni bir bütün olarak ele alıyorum.",
        icon: <IconVaccine/>,
    },
    {
        title: "Sürekli İletişim Halinde Oluyoruz",
        description: "Tedavi sürecinde her adımda yanında oluyorum, ne zaman istersen sorularını cevaplıyorum.",
        icon: <IconPhone/>,
    },
];


export const data3 = [
    {
        title: "Collaborative Editing",
        description:
            "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.you can streamline your workflow and increase productivity.you can streamline your workflow and increase productivity.you can streamline your workflow and increase productivity.",
        content: (
            <div
                className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                Collaborative Editing
            </div>
        ),
        image: "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        title: "Real time changes",
        description:
            "See changes as they happen. With our platform, you can track every modification in real time. No moreSee changes as they happen. With our platform, you can track every modification in real time. No moreSee changes as they happen. With our platform, you can track every modification in real time. No moreSee changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="/linear.webp"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
        image: "https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        title: "Version control",
        description:
            "Experience real-time updates and never stress about version control again. Our platform eExperience real-time updates and never stress about version control again. Our platform eExperience real-time updates and never stress about version control again. Our platform eExperience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
        content: (
            <div
                className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
                Version control
            </div>
        ),
        image: "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        title: "Running out of content",
        description:
            "Experience real-time updates and never stressExperience real-time updates and never stress about version control again. Our platform eExperience real-time updates and never stress about version control again. Our platform eExperience real-time updates and never stress about version control again. Our platform eExperience real-time updates and never stress about version control again. Our platform eExperience real-time updates and never stress about version control again. Our platform e about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
        content: (
            <div
                className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                Running out of content
            </div>
        ),
        image: "https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
];

export const data4 = [
    {
        title: "Forest Adventure",
        src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "Valley of life",
        src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "Sala behta hi jayega",
        src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "Camping is for pros",
        src: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "The road not taken",
        src: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "The First Rule",
        src: "https://assets.aceternity.com/the-first-rule.png",
    },
];

export const data5 = [
    {
        title: "Moonbeam",
        link: "https://gomoonbeam.com",
        thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
    },
    {
        title: "Cursor",
        link: "https://cursor.so",
        thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/cursor.png",
    },
    {
        title: "Rogue",
        link: "https://userogue.com",
        thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/rogue.png",
    },

    {
        title: "Editorially",
        link: "https://editorially.org",
        thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/editorially.png",
    },
    {
        title: "Editrix AI",
        link: "https://editrix.ai",
        thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/editrix.png",
    },
    {
        title: "Pixel Perfect",
        link: "https://app.pixelperfect.quest",
        thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
    },

    {
        title: "Algochurn",
        link: "https://algochurn.com",
        thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
    },
    {
        title: "Aceternity UI",
        link: "https://ui.aceternity.com",
        thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
    },
    {
        title: "Tailwind Master Kit",
        link: "https://tailwindmasterkit.com",
        thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
    },
    {
        title: "SmartBridge",
        link: "https://smartbridgetech.com",
        thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
    },
    {
        title: "Renderwork Studio",
        link: "https://renderwork.studio",
        thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
    },

    {
        title: "Creme Digital",
        link: "https://cremedigital.com",
        thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
    },
    {
        title: "Golden Bells Academy",
        link: "https://goldenbellsacademy.com",
        thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
    },
    {
        title: "Invoker Labs",
        link: "https://invoker.lol",
        thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/invoker.png",
    },
    {
        title: "E Free Invoice",
        link: "https://efreeinvoice.com",
        thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
    },
];

export const data6 = [
    {
        title: "Ev",
        icon: (
            <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300"/>
        ),
        href: "#home",
    },

    {
        title: "Neden Beni Tercih Etmelisiniz",
        icon: (
            <IconUserQuestion className="h-full w-full text-neutral-500 dark:text-neutral-300"/>
        ),
        href: "#neden-beni-tercih-etmelisiniz",
    },
    {
        title: "Sizin Fizyoterapistiniz: İlkay Demirci",
        icon: (
            <IconWomanFilled className="h-full w-full text-neutral-500 dark:text-neutral-300"/>
        ),
        href: "#sizin-fizypterapistiniz-ilkay-demirci",
    },
    {
        title: "İletişim",
        icon: (
            <IconPhone className="h-full w-full text-neutral-500 dark:text-neutral-300"/>
        ),
        href: "#iletisim",
    },
    {
        title: "Uzmanlık Alanlarım",
        icon: (
            <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300"/>
        ),
        href: "#uzmanlik-alanlarim",
    },

    {
        title: "Başarılarım ve Sertifikalarım",
        icon: (
            <IconCertificate className="h-full w-full text-neutral-500 dark:text-neutral-300"/>
        ),
        href: "#basarilarim-ve-sertifikalarim",
    },
    {
        title: "Uygulama ve Tedavi Galerisi",
        icon: (
            <IconPhotoHeart className="h-full w-full text-neutral-500 dark:text-neutral-300"/>
        ),
        href: "#uygulama-ve-tedavi-galerisi",
    },
    {
        title: "Danışan Yorumları",
        icon: (
            <IconMessageCircle className="h-full w-full text-neutral-500 dark:text-neutral-300"/>
        ),
        href: "#danisan-yorumlari",
    },
];

export const data7 = [
    {
        quote:
            "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
        name: "Charles Dickens",
        title: "A Tale of Two Cities",
    },
    {
        quote:
            "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
        name: "William Shakespeare",
        title: "Hamlet",
    },
    {
        quote: "All that we see or seem is but a dream within a dream.",
        name: "Edgar Allan Poe",
        title: "A Dream Within a Dream",
    },
    {
        quote:
            "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
        name: "Jane Austen",
        title: "Pride and Prejudice",
    },
    {
        quote:
            "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
        name: "Herman Melville",
        title: "Moby-Dick",
    },
];



export const data9 = [
    "Omuz Ağrısı",
    "Lenfödem (Fil Hastalığı)",
    "Bel - Boyun Fıtığı",
    "Diz Ağrısı",
    "Ön Çapraz Bağ Kopması",
    "Tenisçi Dirseği",
    "Fibromiyalji",
    "Migren",
    "Eklem Problemleri",
    "Menisküs Yırtığı",
    "Felç",
    "Karpal Tünel Sendromu",
    "Topuk Dikeni",
    "Lipödem (Ağrılı Selülit)",
    "Fıtık",
    "Siyatik hastalığı",
    "Bel fıtığı",
    "Beyin Kanaması",
    "Boyun Fıtığı",
    "Multipl Skleroz - MS",
    "Sinir Sıkışması",
    "Menisküs",
    "Lateral Epikondilit",
    "Yan Çapraz Bağ Kopması",
    "Diz Kireçlenmesi",
    "Kas Ağrıları",
    "Serebral Palsi",
    "Gullian Barre Sendromu",
    "Ayak Bileği Yaralanmaları",
    "Spor Yaralanmaları",
    "Doğumsal Kol Felci",
    "Omuz Sıkışması Sendromu",
    "Bankart Lezyonu",
    "Dirsek Ağrısı (İnstabilitesi)",
    "Bel Ağrıları",
    "Kalça Ağrıları",
    "Ayak ve Ayak Bileği Ağrıları",
    "Dirsek Ağrıları",
    "Kuyruk Sokumu Ağrısı",
    "Çene Eklem Ağrıları",
    "Kronik Baş Ağrısı",
    "Donuk Omuz",
    "Medial Epikondilit",
    "Kireçlenme",
    "Duruş Ve Yürüyüş Bozuklukları",
    "Boyun Düzleşmesi",
    "Bursit",
    "Plantar Fasiit",
    "Aşil Tendinit",
    "Kas ve Eklem Sakatlıkları",
    "Kulunç Ağrısı",
    "Kalça Eklemi Ağrıları",
    "Bel Ağrısı",
    "Kalça Ağrısı",
    "Trokanterik Bursit",
    "Kas Ağrısı",
    "Miyofasial Ağrı"
];
