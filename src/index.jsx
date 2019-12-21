import {Button, NavigationView, Page, contentView, Stack} from 'tabris';
import {NewsPage} from './pages/NewsPage';
import {MyDashboard} from './pages/MyDashboard'
import {RandomPL} from './random';

contentView.append(
  <NavigationView stretch>
    <Page title='Quick-Demo App'>
      <Stack stretch>
        <Button center onSelect={() => openDashboardPage()} padding={25} font="18px" width={350}>Open My Dashboard</Button>
        <Button center onSelect={() => openNewsPage()} padding={25} font="18px" width={350}>News</Button>
        <Button center onSelect={() => openRPLPage()} padding={25} font="18px" width={350}>RandomPL app</Button>
      </Stack>
    </Page>
  </NavigationView>
)
function openNewsPage() {
 $(NavigationView).only().append(
  <NewsPage />
 );
}

function openDashboardPage() {
  $(NavigationView).only().append(
   <MyDashboard />
  );
 }
 
 function openRPLPage() {
  $(NavigationView).only().append(
    <RandomPL />
  )
 }