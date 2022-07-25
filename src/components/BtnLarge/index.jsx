import './styles.css'

export function BtnLarge({ title }) {
  return (
    <div className=''>
      <button className='flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white border border-transparent rounded-md sm:w-auto bg-linkBlue hover:bg-linkHover md:py-4 md:text-xl md:px-10'>
        {title}
      </button>
    </div>
  );
}