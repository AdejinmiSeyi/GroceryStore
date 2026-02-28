import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';


export interface Product{
    id?: string;
    name: string;
    price: number;
    description: string;

}


@Injectable()
export class ProductsService {
    private products: Product[] = [
        {
            id: '1',
            name: 'Bread',
            price: 400,
            description: 'Bread from the store'
        },

        {
            id: '2',
            name: 'Butter',
            price: 600,
            description: 'Butter for the bread'
        }
    ];

    // Find all products
    findAll(){
        return this.products;
    }

    // create product
    create(createProductDto: CreateProductDto): Product{
        const newProduct: Product = {
            id: Date.now().toString(),
            ...createProductDto,
        };
        
        this.products.push(newProduct)
        return newProduct;

    }

    // find one product
    findOne(id:string): Product {
        const product = this.products.find(p => p.id === id);

        if (!product) {
            throw new NotFoundException('Product not found')
        }
        return product;
    }

    update(id: string, updateProductDto: UpdateProductDto): Product{
        const product = this.findOne(id);

        // Ensure to overite only updated data
        const updatedProduct: Product = {
            ...product,
            ...updateProductDto

        };
        this.products = this.products.map(p=> product.id === id ? updatedProduct : p,);
        return updatedProduct;

        }

    remove(id: string): void{
        const product = this.products.find(p => p.id === id);

        if (!product) {
            throw new NotFoundException('Product not found')
        }

        this.products = this.products.filter(p => p.id !== id);
    }
        
}



