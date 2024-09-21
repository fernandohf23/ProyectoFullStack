/**
 * @openapi
 * /api/products:
 *   get:
 *     summary: Retrieve all products
 *     description: Get a list of all products.
 *     responses:
 *       200:
 *         description: A list of products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: The product ID
 *                   name:
 *                     type: string
 *                     description: The name of the product
 *                   price:
 *                     type: number
 *                     format: float
 *                     description: The price of the product
 *                   description:
 *                     type: string
 *                     description: The description of the product
 *       500:
 *         description: Internal server error
 */

/**
 * @openapi
 * /api/products:
 *   post:
 *     summary: Create a new product
 *     description: Add a new product with a name, price, and description.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the product
 *               price:
 *                 type: number
 *                 format: float
 *                 description: The price of the product
 *               description:
 *                 type: string
 *                 description: A brief description of the product
 *             required:
 *               - name
 *               - price
 *     responses:
 *       201:
 *         description: Product created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Product created
 *                 product:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: The product ID
 *                     name:
 *                       type: string
 *                       description: The name of the product
 *                     price:
 *                       type: number
 *                       format: float
 *                       description: The price of the product
 *                     description:
 *                       type: string
 *                       description: The description of the product
 *       500:
 *         description: Internal server error
 */

/**
 * @openapi
 * /api/products/{id}:
 *   get:
 *     summary: Retrieve a product by ID
 *     description: Get details of a specific product by its ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The product ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A single product
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The product ID
 *                 name:
 *                   type: string
 *                   description: The name of the product
 *                 price:
 *                   type: number
 *                   format: float
 *                   description: The price of the product
 *                 description:
 *                   type: string
 *                   description: The description of the product
 *       404:
 *         description: Product not found
 *       500:
 *         description: Internal server error
 */

/**
 * @openapi
 * /api/products/{id}:
 *   put:
 *     summary: Update a product
 *     description: Update the details of a product by its ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The product ID
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The new name of the product
 *               price:
 *                 type: number
 *                 format: float
 *                 description: The new price of the product
 *               description:
 *                 type: string
 *                 description: The new description of the product
 *     responses:
 *       200:
 *         description: Product updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The product ID
 *                 name:
 *                   type: string
 *                   description: The name of the product
 *                 price:
 *                   type: number
 *                   format: float
 *                   description: The price of the product
 *                 description:
 *                   type: string
 *                   description: The description of the product
 *       404:
 *         description: Product not found
 *       500:
 *         description: Internal server error
 */

/**
 * @openapi
 * /api/products/{id}:
 *   delete:
 *     summary: Delete a product
 *     description: Remove a product by its ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The product ID
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Product deleted successfully
 *       404:
 *         description: Product not found
 *       500:
 *         description: Internal server error
 */

const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.getAllProducts);
router.post('/', productController.createProduct);
router.get('/:id', productController.getProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;
