import { useState } from 'react';
import {
  Page,
  Navbar,
  Link,
  Block,
  BlockTitle,
  BlockHeader,
  List,
  ListItem,
  Radio,
  Toggle,
} from 'konsta/react';

export default function HomePage() {
  const [size, setSize] = useState('Default');
  const [isTransparent, setIsTransparent] = useState(false);
  return (
    <Page>
      <Navbar
        title="Navbar"
        subtitle="Subtitle"
        className="top-0 sticky"
        medium={size === 'Medium'}
        large={size === 'Large'}
        transparent={isTransparent}
        right={<Link navbar>Right</Link>}
      />
      <div className="relative">
        <Block strong inset>
          <p>
            Navbar is a fixed area at the top of a screen that contains Page
            title and navigation elements.
          </p>
        </Block>

        <BlockTitle>Size</BlockTitle>
        <BlockHeader>
          Medium and Large will collapse to usual size on page scroll
        </BlockHeader>
        <List strong inset>
          {['Default', 'Medium', 'Large'].map((v) => (
            <ListItem
              key={v}
              label
              title={v}
              after={
                <Radio
                  component="div"
                  value={v}
                  checked={size === v}
                  onChange={() => setSize(v)}
                />
              }
            />
          ))}
        </List>

        <BlockTitle>Transparent</BlockTitle>

        <BlockHeader>
          When navbar is transparent, its title and background will become
          visible on page scroll
        </BlockHeader>
        <List strong inset>
          <ListItem
            label
            title="Transparent"
            after={
              <Toggle
                component="div"
                checked={isTransparent === true}
                onChange={() => setIsTransparent(!isTransparent)}
              />
            }
          />
        </List>

      </div>
    </Page>
  );
}
