export interface Photo {
    img: string;
    alt: string;
    // Optional grid span for the collage tile (Tailwind classes live here so
    // the JIT scanner picks them up). Default is a single 1x1 cell.
    span?: string;
}

export interface PhotoAlbum {
    title: string;
    width: string; // container width
    cols: string; // grid columns
    photos: Photo[];
}

export const albums: PhotoAlbum[] = [
    {
        title: "BJJ 2023 🥋",
        width: "w-[440px]",
        cols: "grid-cols-1",
        photos: [
            {
                img: "/assets/photos/BJJ23/bjj1.jpeg",
                alt: "Braga, Portugal",
                span: "row-span-2",
            },
            { img: "/assets/photos/BJJ23/bjj2.jpeg", alt: "Braga, Portugal" },
        ],
    },
    {
        title: "Summer 2023 🌞",
        width: "w-[900px]",
        cols: "grid-cols-4",
        photos: [
            {
                img: "/assets/photos/Summer23/1.jpeg",
                alt: "Costa Vicentina, Portugal",
            },
            {
                img: "/assets/photos/Summer23/2.jpeg",
                alt: "Costa Vicentina, Portugal",
            },
            {
                img: "/assets/photos/Summer23/3.jpeg",
                alt: "Lagos, Portugal",
                span: "row-span-2",
            },
            { img: "/assets/photos/Summer23/4.jpeg", alt: "Lisboa, Portugal" },
            {
                img: "/assets/photos/Summer23/5.jpeg",
                alt: "Costa Vicentina, Portugal",
                span: "col-span-2",
            },
            {
                img: "/assets/photos/Summer23/6.jpeg",
                alt: "Olhos de Água, Portugal",
            },
            { img: "/assets/photos/Summer23/7.jpeg", alt: "Setúbal, Portugal" },
            { img: "/assets/photos/Summer23/8.jpeg", alt: "Rio Tejo, Portugal" },
            {
                img: "/assets/photos/Summer23/9.jpeg",
                alt: "Braga, Portugal",
                span: "col-span-2",
            },
        ],
    },
    {
        title: "London 2023 🇬🇧",
        width: "w-[650px]",
        cols: "grid-cols-3",
        photos: [
            { img: "/assets/photos/London23/1.jpeg", alt: "London, UK" },
            { img: "/assets/photos/London23/2.jpeg", alt: "London, UK" },
            {
                img: "/assets/photos/London23/3.jpeg",
                alt: "London, UK",
                span: "row-span-2",
            },
            { img: "/assets/photos/London23/4.jpeg", alt: "London, UK" },
            { img: "/assets/photos/London23/5.jpeg", alt: "London, UK" },
            { img: "/assets/photos/London23/6.jpeg", alt: "London, UK" },
            { img: "/assets/photos/London23/7.jpeg", alt: "London, UK" },
            { img: "/assets/photos/London23/8.jpeg", alt: "London, UK" },
        ],
    },
];
