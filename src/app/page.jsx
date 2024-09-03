import Hero from '@/components/Hero';
import Card from '@/components/Card';
import Content from '@/components/Content';

export default function Home() {
  return (
    <main>
      <Hero />
      <Content>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card title="Card 1" description="This is the first card." />
          <Card title="Card 2" description="This is the second card." />
          <Card title="Card 3" description="This is the third card." />
        </div>
      </Content>
    </main>
  );
}
