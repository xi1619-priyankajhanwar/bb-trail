import { AtmDataMocksProvider } from './../../../../libs/atm-data/src/atm-data-mocks.service';

import { createMocksInterceptor } from '@backbase/foundation-ang/data-http';
import { ProductSummaryDataHttpMocksProvider } from '@backbase/data-ang/product-summary';
import { ContactDataHttpMocksProvider } from '@backbase/data-ang/contact';
import { TransactionsDataHttpMocksProvider } from '@backbase/data-ang/transactions';

export const mockProviders = [
    createMocksInterceptor(),
    ProductSummaryDataHttpMocksProvider,
    ContactDataHttpMocksProvider,
    TransactionsDataHttpMocksProvider,
    AtmDataMocksProvider
];