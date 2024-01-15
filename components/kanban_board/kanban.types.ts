import type {EnumStatus} from "~/types/deals.types"

export interface ICard {
    is: string
    name: string
    price: number
    $createAt: string
    companyName: string
    status: string
}

export interface IColumn {
    id: EnumStatus
    name: string
    items: ICard[]
}