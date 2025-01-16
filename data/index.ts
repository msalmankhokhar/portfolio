export interface TechstackInterface {
    title: string;
    icon: string;
    key: number;
}

export interface ProjectInterface {
    key: number;
    title: string;
    desc: string;
    thumbnail: string;
    techstack: TechstackInterface[];
    url: string;
}

export const PERSONAL_DETAILS = {
    name: 'Salman Khokhar',
    firstName: 'Salman',
    lastName: 'Khokhar',
    email: 'salman@salmanmalik.pro'
}

export const TECH_STACK = {
    tailwindCss: {
        title: 'Tailwind CSS',
        icon: 'tw.png',
        key: 1
    },
    react: {
        title: 'React',
        icon: 'react.png',
        key: 2
    },
    nextJs: {
        title: 'NextJS',
        icon: 'next.png',
        key: 3
    },
    node: {
        title: 'NodeJS',
        icon: 'node.png',
        key: 4
    },
    typeScript: {
        title: 'TypeScript',
        icon: 'ts.png',
        key: 5
    },
    javaScript: {
        title: 'JavaScript',
        icon: 'js.png',
        key: 6
    },
    python: {
        title: 'Python',
        icon: 'python.png',
        key: 7
    },
    figma: {
        title: 'Figma',
        icon: 'figma.png',
        key: 8
    },
}

export const PROJECTS = [
    {
        key: 1,
        title: 'Neuros',
        desc: 'AI Saas Application landing Page',
        thumbnail: 'neuros.png',
        techstack: [
            TECH_STACK.react,
            TECH_STACK.nextJs,
            TECH_STACK.tailwindCss,
            TECH_STACK.javaScript,
            TECH_STACK.figma,
        ],
        url: 'https://neuros-saas-landing-page-nextjs-msalmankhokhars-projects.vercel.app'
    },
    {
        key: 2,
        title: 'HiLink',
        desc: 'Travel Website landing page',
        thumbnail: 'hilink.png',
        techstack: [
            TECH_STACK.react,
            TECH_STACK.nextJs,
            TECH_STACK.tailwindCss,
            TECH_STACK.typeScript
        ],
        url: 'https://travel-website-nextjs-msalmankhokhars-projects.vercel.app'
    },
    {
        key: 3,
        title: 'Al Habib Travels UK',
        desc: 'Full Stack Travel Agency Website',
        thumbnail: 'aht.png',
        techstack: [
            TECH_STACK.react,
            TECH_STACK.nextJs,
            TECH_STACK.tailwindCss,
            TECH_STACK.javaScript,
            TECH_STACK.figma
        ],
        url: 'https://www.alhabibtravel.co.uk'
    },
]

export const SOCIAL_ACCOUNTS = {
    facebook: {
        url: 'https://www.facebook.com/msalmankhokhar13'
    },
    linkedin: {
        url: 'https://www.linkedin.com/in/msalmankhokhar'
    },
    github: {
        url: 'https://github.com/msalmankhokhar'
    },
}