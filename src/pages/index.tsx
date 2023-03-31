import { styled } from "../styles/index"

const Button = styled('button', {
  backgroundColor: "$rocketseat",
  borderRadius: 8,
  border: 0,
  padding: '4px 8px',

  '&:hover': {
    filter: 'brightness(0.8)'
  }
})

export default function Home() {
  return (
    <>
      <Button>
        Enviar
      </Button>
    </>
  )
}
