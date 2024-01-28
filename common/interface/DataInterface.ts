export interface SkillIntefece {
    title: string;
    percentage: number;
}

export interface TabValueInterface {
    title: string;
    key: string
}


export interface ProjectInterface {
    src: string;
    type: string;
    detail: DetailProjectInterface
}

export interface DetailProjectInterface {
    project: string;
    tech: string;
    link?: string;
}