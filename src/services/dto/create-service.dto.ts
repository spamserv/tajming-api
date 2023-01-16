import { Category } from "src/categories/entities/category.entity"

export class CreateServiceDto {
    id: number
    name: string
    description: string
    duration: number
    created_at: string
    deleted_at: string
    category: Category
}
