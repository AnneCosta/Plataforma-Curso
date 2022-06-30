import './styles.css'

export function BtnSmall({ title }) {
  return (
    <div className='btnSmall'>
      <button>
        {title}
      </button>
    </div>
  )
}