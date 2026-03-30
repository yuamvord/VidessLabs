interface Props {
  text: string;
  variant?: 'primary' | 'outline';
  onClick?: () => void;
}

export const Button = ({ text, variant = 'primary', onClick }: Props) => {
  const styles = variant === 'primary' 
    ? "bg-[#800ED4] text-white hover:shadow-lg hover:shadow-[#800ED4]/20" 
    : "border-2 border-[#800ED4] text-[#800ED4] hover:bg-[#800ED4]/5";

  return (
    <button 
      onClick={onClick}
      className={`${styles} px-8 py-3 rounded-lg font-bold transition-all active:scale-95`}
    >
      {text}
    </button>
  );
};