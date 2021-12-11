import Button from './stories/components/Button';
import Input from './stories/components/Input';
import Card from './stories/components/Card';

const App = () => {
  return (
    <div className="container mx-auto">
      <div className="text-2xl py-6">This is Component Playground</div>
      <Card title="Sign In">
        <Input placeholder="Email" className="mb-3" size="large" />
        <Input placeholder="Password" className="mb-3" size="large"/>
        <Button type="primary" size="large">Sign In</Button>
      </Card>
    </div>
  )
}

export default App
