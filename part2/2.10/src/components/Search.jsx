const Search= ({searchName},{filter}) => {
  console.log({filter})
  return (
    <div>
    filter shown with : <input value={searchName.searchName} onChange={filter.filterChange}/>
    </div>
  )
}

export default Search
