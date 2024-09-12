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
        title: "Eğitim ve Uzmanlık",
        description:
            "Gazi Üniversitesi Fizyoterapi ve Rehabilitasyon Bölümü’nden  mezun oldum. Fizyoterapi alanındaki uzmanlık yolculuğum, Akdeniz Üniversitesi’nde Fizyoterapi Teknikerliği bölümünü tamamlamamla başladı. Meslek hayatım boyunca, Reformer Pilates, Manuel Terapi ve Refleksoloji gibi önemli alanlarda sertifikalar alarak kendimi sürekli geliştirdim.\n",
        content: (
            <div
                className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                Collaborative Editing
            </div>
        ),
        image: "https://images.unsplash.com/photo-1620050382792-434b5828873d?q=80&w=2612&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "Mesleki Deneyim ve Yaklaşım",
        description:
            "Hastalarımın fiziksel sağlık hedeflerine ulaşmalarını, yaşam kalitelerini artırmalarını sağlamak için büyük bir özveriyle çalışıyorum. Mesleki deneyimlerim, geniş bir yelpazeye yayılan uzmanlık alanlarımı içermektedir. Bu alanlar; Onkolojik Rehabilitasyon Kardiyopulmoner Rehabilitasyon, Sporcu Sağlığı, Ortopedik Rehabilitasyon, El ve Romatolojik Rehabilitasyon, Pediatrik Rehabilitasyon, Nörolojik Rehabilitasyonu içermektedir. Fizyoterapideki yaklaşımım, hastalarımın ihtiyaçlarına uygun, kişiselleştirilmiş tedavi planları oluşturarak onların yaşam kalitelerini artırmayı hedeflemektedir.",
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
        image: "https://images.unsplash.com/photo-1648638810948-f3bf2cccdde9?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
];

export const data4 = [
    {
        title: "Otizm Çalıştayı",
        src: "/s1.jpeg",
    },
    {
        title: "Manipulative Physical Therapy",
        src: "/s2.jpeg",
    },
    {
        title: "Manuel Physical Therapy",
        src: "/s3.jpeg",
    },
    {
        title: "Cupping and Hirudotherapy",
        src: "/s4.jpeg",
    },
    {
        title: "Trigger Points Therapy",
        src: "/s5.jpeg",
    },
    {
        title: "Reformer Pilates",
        src: "/s6.jpeg",
    },
    {
        title: "Refleksoloji",
        src: "/s7.jpeg",
    },
];

export const data5 = [
    {
        title: "",
        thumbnail:
            "https://images.unsplash.com/photo-1648638810948-f3bf2cccdde9?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "",

        thumbnail:
            "https://images.unsplash.com/photo-1620050382792-434b5828873d?q=80&w=2612&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "",
        thumbnail:
            "https://images.unsplash.com/photo-1620051844584-15ac31d5fccd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
        title: "",
        thumbnail:
            "https://images.unsplash.com/photo-1620052079778-7d5b7509645c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "",
        thumbnail:
            "https://images.unsplash.com/photo-1617952986600-802f965dcdbc?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "",
        thumbnail:
            "https://images.unsplash.com/photo-1597764690523-15bea4c581c9?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
        title: "",
        thumbnail:
            "https://images.unsplash.com/photo-1522845052468-8b871a6176e5?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "",
        thumbnail:
            "https://images.unsplash.com/photo-1581090122319-8fab9528eaaa?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "",
        thumbnail:
            "https://images.pexels.com/photos/5794055/pexels-photo-5794055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        title: "",
        thumbnail:
            "https://images.pexels.com/photos/5794025/pexels-photo-5794025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        title: "",
        thumbnail:
            "https://images.pexels.com/photos/20860580/pexels-photo-20860580/free-photo-of-physiotherapist-and-patient.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },

    {
        title: "",
        thumbnail:
            "https://images.pexels.com/photos/27730430/pexels-photo-27730430/free-photo-of-a-woman-and-man-doing-a-massage-on-a-man.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        title: "",
        thumbnail:
            "https://images.pexels.com/photos/20860607/pexels-photo-20860607/free-photo-of-physiotherapist-massaging-knee.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        title: "",
        thumbnail:
            "https://images.pexels.com/photos/20860621/pexels-photo-20860621/free-photo-of-woman-helping-patient-exercising.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        title: "",
        thumbnail:
            "https://images.pexels.com/photos/20860615/pexels-photo-20860615/free-photo-of-physiotherapist-helping-a-patient-exercise-his-back.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
            "Fizyoterapistim sayesinde bel ağrılarım tamamen geçti. Her seans profesyonel ve etkiliydi.",
        name: "Ayşe Yıldız",
    },
    {
        quote:
            "Dizimdeki sakatlık için aldığım tedavi, beklediğimden çok daha hızlı bir iyileşme sağladı. İlgisi ve bilgisi gerçekten mükemmeldi.",
        name: "Mehmet Can",
    },
    {
        quote:
            "Fizyoterapi seansları sayesinde hareket kabiliyetim geri geldi. Gerçekten alanında uzman bir fizyoterapist.",
        name: "Elif Demir",
    },
    {
        quote:
            "Omuz ağrım için aldığım tedavi çok başarılıydı. Seanslardan sonra ağrılarım belirgin şekilde azaldı.",
        name: "Fatma Kaya",
    },
    {
        quote:
            "Fizyoterapistim, tedavi sürecini çok iyi yönetti ve beni her adımda bilgilendirdi. Artık çok daha rahatım.",
        name: "Ahmet Yılmaz",
    },
];

export const data9 = [
    "Omuz Ağrısı",
    "Bel - Boyun Fıtığı",
    "Diz Ağrısı",
    "Ön Çapraz Bağ Kopması",
    "Tenisçi Dirseği",
    "Fibromiyalji",
    "Migren",
    "Eklem Problemleri",
    "Menisküs Yırtığı",
    "İnme",
    "Karpal Tünel Sendromu",
    "Fıtık",
    "Siyatik ağrısı",
    "Bel fıtığı",
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
    "Brachial Plexus",
    "İmpingement Sendromu",
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
