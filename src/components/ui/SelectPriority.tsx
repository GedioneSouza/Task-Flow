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
import { FormControl } from "./form"

export function SelectPriority() {
    return (
            <Select>
                <SelectTrigger className="w-[278px]">
                    <SelectValue placeholder="Selecionar uma fruta" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Prioridade</SelectLabel>

                        <SelectItem value="ALTA" >
                            <div className="flex flex-row items-center gap-1.5">
                                <ArrowUpCircle className="text-red-600" />
                                <span>ALTA</span>
                            </div>
                        </SelectItem>
                        <SelectItem value="MÉDIA">
                            <div className="flex flex-row items-center gap-1.5">
                                <AlertCircle className="text-yellow-400" />
                                MÉDIA
                            </div>
                        </SelectItem>
                        <SelectItem value="BAIXA">
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
