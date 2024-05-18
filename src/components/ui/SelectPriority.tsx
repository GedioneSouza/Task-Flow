import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { ArrowUpCircle, AlertCircle, ArrowDownCircle } from 'lucide-react'

export function SelectPriority() {
    return (
        <Select>
            <SelectTrigger className="w-[278px]">
                <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Prioridade</SelectLabel>

                    <SelectItem value="apple" >
                        <div className="flex flex-row items-center gap-1.5">
                            <ArrowUpCircle className="text-red-600" />
                            <span>ALTA</span>
                        </div>
                    </SelectItem>
                    <SelectItem value="banana">
                        <div className="flex flex-row items-center gap-1.5">
                            <AlertCircle className="text-yellow-400" />
                            MÉDIA
                        </div>
                    </SelectItem>
                    <SelectItem value="blueberry">
                        <div className="flex flex-row items-center gap-1.5">
                            <ArrowDownCircle className="text-green-500" />
                            BAIXA
                        </div>
                    </SelectItem>

                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
