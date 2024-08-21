import {
  GenreButton,
  GenreFilters,
  HomePageFilters,
  SearchInput
} from '../components/styles/pages/HomePage.styled'

export default function HomePage() {
  return (
    <main>
      <HomePageFilters>
        <SearchInput type="text" placeholder="Search by Title, Artist, Album..." />
        <GenreFilters>
          <GenreButton>pop</GenreButton>
          <GenreButton>rock</GenreButton>
          <GenreButton>rap</GenreButton>
          <GenreButton>classical</GenreButton>
          <GenreButton>electronic</GenreButton>
          <GenreButton>ethiopian</GenreButton>
        </GenreFilters>
      </HomePageFilters>
    </main>
  )
}
