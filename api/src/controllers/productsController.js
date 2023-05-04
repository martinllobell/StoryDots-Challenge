const { Brand, Product } = require("../db.js");
const { Op } = require('sequelize');

const getAllProducts = async (req, res) => {
    try {
        const { name } = req.query;

        let productSearch;

        if (name) {
            productSearch = await Product.findAll({
                include: [{ model: Brand }],
                where: {
                    name: {
                        [Op.iLike]: `%${name}%`,
                    },
                },
            });
        } else {
            productSearch = await Product.findAll({ include: [{ model: Brand }] });
        }

        if (!productSearch.length) return res.status(404).json("Products not found");
        else return res.status(200).json(productSearch);
    } catch (error) {
        console.log(error);
        return res.status(500).json("An error occurred while fetching products");
    }
};


const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByPk(id, { include: [{ model: Brand }] });

        if (!product) return res.status(404).json("Product not found");
        else return res.status(200).json(product);

    } catch (error) {
        console.log(error);
        return res.status(500).json("An error occurred while getting the product");
    }
};


const createProduct = async (req, res) => {
    try {
        const { name, description, image_url, price, BrandId } = req.body;

        if (!name || !price || !BrandId) {
            return res.status(400).json("Please provide a name, price and brandId for the product");
        }

        const newProduct = await Product.create({
            name,
            description,
            image_url,
            price,
            BrandId
        }, {
            include: [{ model: Brand }]
        });

        return res.status(201).json(newProduct);
    } catch (error) {
        console.log(error);
        return res.status(500).json("An error occurred while creating the product");
    }
};


const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, image_url, price, BrandId } = req.body;

        const product = await Product.findByPk(id);

        if (!product) {
            return res.status(404).json("Product not found");
        }

        const updatedProduct = await product.update({
            name: name || product.name,
            description: description || product.description,
            image_url: image_url || product.image_url,
            price: price || product.price,
            BrandId: BrandId || product.BrandId
        });

        return res.status(200).json(updatedProduct);
    } catch (error) {
        console.log(error);
        return res.status(500).json("An error occurred while updating the product");
    }
};


const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;

        const product = await Product.findByPk(id);

        if (!product) {
            return res.status(404).json("Product not found");
        }

        await product.destroy();

        return res.status(204).json();
    } catch (error) {
        console.log(error);
        return res.status(500).json("An error occurred while deleting the product");
    }
};


module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};
