import { IonContent, IonPage } from '@ionic/react'
import { Tabs } from 'entities/layout/ui/tab'
import { Sider } from 'entities/layout/ui/sider'

import { Header } from '../header'

export const Layout: FC = ({ children }) => {
	return (
		<>
			<Sider />
			<IonPage id={'main-content'}>
				<Header />
				<IonContent className={'ion-padding'}>
					<Tabs>{children}</Tabs>
				</IonContent>
			</IonPage>
		</>
	)
}
