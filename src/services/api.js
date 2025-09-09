import { supabase } from '@/services/supabase'

export async function getCategories() {
  const { data, error } = await supabase.from('categories').select('*')

  if (error) {
    console.error('Error fetching categories:', error.message)
    throw new Error(error.message)
  }

  return data
}

export async function getProductsWithCategory() {
  const { data, error } = await supabase.from('products').select(`
      *,
      categories (
        name
      )
    `)

  if (error) {
    console.error('Error fetching products with categories:', error.message)
    throw new Error(error.message)
  }

  return data
}

export async function searchProductsByName(searchTerm, { signal }) {
  const { data, error } = await supabase
    .from('products')
    .select('*, categories(name)')
    .ilike('name', `%${searchTerm}%`)
    .abortSignal(signal)

  if (error && error.code !== '20') {
    console.error('Error searching products:', error.message)
    throw new Error(error.message)
  }

  return data
}

/**
 * Fetches a single product by its ID.
 * @param {string | number} productId - The ID of the product to fetch.
 * @returns {Promise<Object>} A promise that resolves to the product object.
 */
export async function getProductById(productId) {
  const { data, error } = await supabase
    .from('products')
    .select('*, categories(name)')
    .eq('id', productId)
    .single()

  if (error) {
    console.error('Error fetching product:', error.message)
    throw new Error(error.message)
  }

  return data
}
