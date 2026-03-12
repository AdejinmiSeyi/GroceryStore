import { Controller, Get, Param, Query, Post, Body, Patch, Delete} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductsService } from './products.service';
import { UpdateProductDto } from './dto/update-product.dto';
import { deleteProductDto } from './dto/delete-product.dto';

@Controller('products')
export class ProductsController {

    constructor(private productsService: ProductsService){}
   
    @Get()
    findAll(){ 
        return this.productsService.findAll();

    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return this.productsService.findOne(id);
    }

    @Post() 
    create (@Body() createProductDto: CreateProductDto) {
        return this.productsService.create(createProductDto)
        // return {
        //     name: CreateProfileDto.name,
        //     description: CreateProfileDto.description,
           
        // };
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
        return this.productsService.update(id, updateProductDto)
    }

    @Delete(':id')
    remove(@Param() params: deleteProductDto) {
        const id = params.id
        this.productsService.remove(id)
        return {Message: 'Product deleted successfully'}
    }

}
