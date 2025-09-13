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

export async function createProfile(userId, profileData) {
  const { error } = await supabase.from('profiles').insert({
    id: userId,
    full_name: profileData.full_name,
    phone_number: profileData.phone_number,
  })
  if (error) throw error
}

/**
 * Adds a new address for the currently logged-in user.
 * @param {object} addressData - { address, lat, lng, user_id }
 */
export async function addAddress(addressData) {
  const { data, error } = await supabase.from('addresses').insert(addressData).select().single()

  if (error) {
    console.error('Error adding address:', error)
    throw error
  }
  return data
}

export async function getAddresses() {
  const { data, error } = await supabase
    .from('addresses')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching addresses:', error)
    throw error
  }

  return data
}
