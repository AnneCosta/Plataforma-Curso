import './styles.css'

export function BtnSmall({ title, link }) {
  return (
    <div>
      <a href={link} className='flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white border border-transparent rounded-md sm:w-auto bg-linkBlue hover:bg-linkHover md:py-3 md:text-lg md:px-8'>
        {title}
      </a>
    </div>
  )
}