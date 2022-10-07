import Logo from '../../assets/logo.png'

const Header = ({ size }) => {
  return (
    <div className="img-logo">
      <img src={Logo} alt="logo" width={size} />
    </div>
  )
}

export default Header