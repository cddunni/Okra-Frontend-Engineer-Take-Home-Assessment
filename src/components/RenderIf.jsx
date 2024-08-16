
export const RenderIf = ({condition, children}) => {

  if (!condition) {
    return null
  }

  return <>{children}</>
}
