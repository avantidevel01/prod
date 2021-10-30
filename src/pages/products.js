import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Highlights from "../components/products-highlights"
import Products from "../components/products"

const ProductsPage = () => {
  return (
    <div>
      <Layout>
        <SEO title="Refurbished Flexible and Rigid Endoscopes for Sale" />
        <main>
          <div className="px-6">
            <h1 className="text-3xl font-bold py-4 text-blue-800 leading-normal">
              Flexible Endoscopes,{" "}
              <span className="whitespace-nowrap">Rigid Endoscopes</span> &
              <span className="whitespace-nowrap"> Integrative Devices</span>
            </h1>
            <h2 className="text-xl  font-bold pt-0 pb-8 text-green-800 leading-normal">
              Call us today at{" "}
              <span className="hover:bg-green-800 hover:text-gray-100 mx-2">
                <a href="tel:(747) 444-9179">(747) 444-9179</a>
              </span>
              for more information!
            </h2>
            <Products />

            <Highlights />
          </div>
        </main>
      </Layout>
    </div>
  )
}

export default ProductsPage
