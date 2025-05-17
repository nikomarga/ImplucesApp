import Aside from "./../admin/components/Aside"
import Content from "./../admin/components/Content"

export default function Dashboard() {
  return (
    <>
      <div id="page-top">
        {/* Päge Wrapper */}
      <div id="wrapper">
          <Aside/>
          <Content/>
        </div>
      </div>
    </>
  )
}
