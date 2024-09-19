import { ButtonProps } from '../../types/task'
import './button.css'

const Button: React.FC<ButtonProps> = ({
	label,
	onClick,
	color = 'primary',
	size = 'medium',
	icon,
}) => {
	
	const buttonClass = `btn btn-${color} btn-${size}`

	return (
		<button
			className={buttonClass}
			onClick={onClick}
		>
			{icon && <span className='btn-icon'>{icon}</span>}
			{label && <span className='btn-label'>{label}</span>}
		</button>
	)
}

export default Button
