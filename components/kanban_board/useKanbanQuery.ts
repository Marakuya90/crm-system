import {useQuery} from "@tanstack/vue-query";
import {COLLECTIONS_DEALS, DB_ID} from "~/app.constants";
import {KANBAN_DATA} from "~/components/kanban_board/kanban.data";
import type {IDeal} from "~/types/deals.types";

export function useKanbanQuery() {
    return useQuery({
        queryKey: ['deals'],
        queryFn: () => DB.listDocuments(DB_ID, COLLECTIONS_DEALS),
        select(data) {
            const newBoard = [...KANBAN_DATA]
            console.log(data.documents)
            const deals = data.documents as unknown as IDeal[]
            console.log(deals)
            for(const deal of deals) {
                const column = newBoard.find(column => column.id == deal.status)
                if(column) {
                    column.items.push({
                        $createAt: deal.$createdAt,
                        id: deal.$id,
                        name: deal.name,
                        price: deal.price,
                        companyName: deal.customer.name,
                        status: column.name
                    })
                }
            }
            return newBoard
        }
    })
}