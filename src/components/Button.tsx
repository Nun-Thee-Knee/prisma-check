const Button = ({text}:{text:string}) => {
  return (
    <button className="bg-purple-600 hover:bg-purple-400 p-4 text-white rounded-lg font-bold">
        {text}
    </button>
  )
}

export default Button