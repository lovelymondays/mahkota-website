import { Helmet } from 'react-helmet-async'

interface SchemaMarkupProps {
  type: string
  data: Record<string, any>
}

export default function SchemaMarkup({ type, data }: SchemaMarkupProps) {
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  )
}
