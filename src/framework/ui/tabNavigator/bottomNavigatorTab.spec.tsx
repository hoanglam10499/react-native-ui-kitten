import React from 'react';
import { Image } from 'react-native';
import { render } from 'react-native-testing-library';
import {
  styled,
  StyleProvider,
  StyleProviderProps,
} from '@kitten/theme';
import * as config from './bottomNavigatorTab.spec.config';
import {
  BottomNavigatorTab as BottomNavigatorTabComponent,
  Props as BottomNavigatorTabProps,
} from './bottomNavigatorTab.component';

const BottomNavigatorTab = styled<BottomNavigatorTabComponent, BottomNavigatorTabProps>(BottomNavigatorTabComponent);

describe('@bottom-navigator-tab: component checks', () => {

  const testTabUri: string = 'https://cdn0.iconfinder.com/data/icons/customicondesignoffice5/256/examples.png';

  const Mock = (props?: BottomNavigatorTabProps): React.ReactElement<StyleProviderProps> => (
    <StyleProvider mapping={config.mapping} theme={config.theme} styles={{}}>
      <BottomNavigatorTab {...props}/>
    </StyleProvider>
  );

  it('* empty', () => {
    const component = render(
      <Mock/>,
    );
    expect(component).toMatchSnapshot();
  });

  it('* with icon', () => {
    const getImageSource = () => ({ uri: testTabUri });
    const component = render(
      <Mock
        icon={(width: number, height: number, color: string) => (
          <Image
            source={getImageSource()}
            style={{
              width: width,
              height: height,
              tintColor: color,
            }}
          />
        )}/>,
    );
    expect(component).toMatchSnapshot();
  });

  it('* text/selected', () => {
    const getImageSource = () => ({ uri: testTabUri });
    const component = render(
      <Mock
        icon={(width: number, height: number, color: string) => (
          <Image
            source={getImageSource()}
            style={{
              width: width,
              height: height,
              tintColor: color,
            }}
          />
        )}
        selected={true}
        title='Test'
      />,
    );
    expect(component).toMatchSnapshot();
  });

  it('* text/unselected', () => {
    const getImageSource = () => ({ uri: testTabUri });
    const component = render(
      <Mock
        icon={(width: number, height: number, color: string) => (
          <Image
            source={getImageSource()}
            style={{
              width: width,
              height: height,
              tintColor: color,
            }}
          />
        )}
        selected={false}
        title='Test'
      />,
    );
    expect(component).toMatchSnapshot();
  });

  it('* getIconSource', () => {
    const getImageSource = jest.fn();
    const component = render(
      <Mock icon={getImageSource}/>,
    );
    expect(getImageSource).toHaveBeenCalled();
  });

});