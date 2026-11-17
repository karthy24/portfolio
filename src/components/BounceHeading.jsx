import TextEngine from 'spring-text-engine';

/**
 * Bounce Up text animation component powered by spring-text-engine & @react-spring/web.
 * Springs letters from out state (opacity 0, y 30) to in state (opacity 1, y 0)
 * with a bouncy overshoot (tension: 420, friction: 12) and 28ms stagger.
 */
export default function BounceHeading({
  tag = 'h2',
  className = '',
  justify = 'justify-start',
  children,
  ...props
}) {
  return (
    <TextEngine
      tag={tag}
      mode="once"
      letterOut={{ opacity: 0, y: 30 }}
      letterIn={{ opacity: 1, y: 0 }}
      letterConfig={{ tension: 420, friction: 12 }}
      letterStagger={28}
      className={`${justify} ${className}`}
      {...props}
    >
      {children}
    </TextEngine>
  );
}
