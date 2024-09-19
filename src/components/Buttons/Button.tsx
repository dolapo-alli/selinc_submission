import { ButtonProps } from '../../types/task'
import './button.css'

const Button: React.FC<ButtonProps> = ({
	label,
	onClick,
	color = 'primary',
	size = 'medium',
}) => {
	const buttonClass = `btn btn-${color} btn-${size}`

	return (
		<button
			className={buttonClass}
			onClick={onClick}
		>
			{label}
		</button>
	)
}

export default Button
