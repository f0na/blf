export interface Site {
    name: string
    icon?: string
    banner?: string
    icp?: string
    copyright?: string
    about?: string
    create_at?: string
}

export enum SocialType {
    Account,
    Link
}

export interface Social {
    social_type: SocialType
    icon?: string
    value: string
}