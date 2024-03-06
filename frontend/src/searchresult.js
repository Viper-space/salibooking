

export default function searchResult(){

    return(
            <div>
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Where is your next trip going to be..."
          />
          <button type="submit">Search</button>
        </form>
        {/* Display search results */}
        <ul>
          {searchResults.map((result, index) => (
            <li key={index}>{result.name}</li> /* Adjust this based on your API response structure */
          ))}
        </ul>
      </div>
    )
};