const { Brand, Product } = require("../db.js");
const { Op } = require("sequelize");


const getAllBrands = async (req, res) => {
    try {
        const { name } = req.query;

        let brands;

        if (name) {
            brands = await Brand.findAll({
                where: {
                    name: {
                        [Op.iLike]: `%${name}%`,
                    },
                },
                include: {
                    model: Product,
                },
            });
        } else {
            brands = await Brand.findAll({
                include: {
                    model: Product,
                },
            });
        }

        if (!brands.length) {
            return res.status(404).json("Brands not found");
        }

        return res.status(200).json(brands);
    } catch (error) {
        console.log(error);
        return res.status(500).json("An error occurred while getting the brands");
    }
};


const getBrandById = async (req, res) => {
    try {
        const brand = await Brand.findByPk(req.params.id, {
            include: { model: Product },
        });

        if (!brand) {
            return res.status(404).json("Brand not found");
        }

        return res.status(200).json(brand);
    } catch (error) {
        console.log(error);
        return res.status(500).json("An error occurred while getting the brand");
    }
};


const createBrand = async (req, res) => {
    try {
        const { name, logo_url } = req.body;
        if (!name) {
            return res.status(400).json("Please provide a name for the brand");
        }
        const newBrand = await Brand.create({
            name,
            logo_url,
        });
        return res.status(201).json(newBrand);
    } catch (error) {
        console.log(error);
        return res.status(500).json("An error occurred while creating the brand");
    }
};


const updateBrand = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, logo_url } = req.body;
        const brand = await Brand.findByPk(id);
        if (!brand) {
            return res.status(404).json("Brand not found");
        }
        brand.name = name || brand.name;
        brand.logo_url = logo_url || brand.logo_url;
        await brand.save();
        return res.status(200).json(brand);
    } catch (error) {
        console.log(error);
        return res.status(500).json("An error occurred while updating the brand");
    }
};


const deleteBrand = async (req, res) => {
    try {
        const { id } = req.params;
        const brand = await Brand.findByPk(id);
        if (!brand) {
            return res.status(404).json("Brand not found");
        }
        await brand.destroy();
        return res.status(204).json();
    } catch (error) {
        console.log(error);
        return res.status(500).json("An error occurred while deleting the brand");
    }
};


module.exports = {
    getAllBrands,
    getBrandById,
    createBrand,
    updateBrand,
    deleteBrand
};
