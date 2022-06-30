import './styles.css'

export function BtnLarge({ title }) {
  return (
    <div className='btnLarge'>
      <button>
        {title}
      </button>
    </div>
  );
}