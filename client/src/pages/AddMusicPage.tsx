import { Button, FormControl, Input, Label } from '../components/styles/common/Form'
import { Container, StyledForm } from '../components/styles/pages/AddMusicPage.styled'

export default function AddMusicPage() {
  return (
    <Container>
      <div>
        <h1>Add Music</h1>
      </div>
      <StyledForm>
        <FormControl>
          <Label>Title</Label>
          <Input placeholder="Title here..." type="text" />
        </FormControl>
        <FormControl>
          <Label>Artist</Label>
          <Input placeholder="Artist name here..." type="text" />
        </FormControl>
        <FormControl>
          <Label>Album</Label>
          <Input placeholder="Album name here..." type="text" />
        </FormControl>
        <FormControl>
          <Label>Genre</Label>
          <Input placeholder="Genre name here..." type="text" />
        </FormControl>
        <Button>Save</Button>
      </StyledForm>
    </Container>
  )
}
