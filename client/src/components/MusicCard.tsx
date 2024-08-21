import { Card, CardBadge, CardContent, CardHeader } from './styles/MusicCard.styled'

export default function MusicCard() {
  return (
    <Card>
      <div>
        <img src="../../../images/default-imge.jpg" alt="Default Music Image" />
      </div>
      <CardContent>
        <CardHeader>
          <h3>Without Me</h3>
          <h4>Eminem</h4>
          <p>The Eminem Show</p>
        </CardHeader>
        <CardBadge>Rap</CardBadge>
      </CardContent>
    </Card>
  )
}
