import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import BottomBar from './BottomBar';
import skipReducer, { SkipState } from '../../../../services/skips/skipSlice';
import { Skip } from '../../../../services/skips/skipModules';


jest.mock('lucide-react', () => ({
    ArrowRight: () => <div data-testid="arrow-right-icon" />
}));

jest.mock('./BottomBar.module.scss', () => ({
    bottomBarContainer: 'bottomBarContainer',
    bottomBar: 'bottomBar',
    skipInfo: 'skipInfo',
    skipPrice: 'skipPrice',
    buttons: 'buttons',
    backBtn: 'backBtn',
    continueBtn: 'continueBtn'
}));

describe('BottomBar Component', () => {
    const mockSkip: Skip = {
        id: 1,
        pricePerWeek: 150,
        size: 8,
        hirePeriodDays: 7,
        totalPrice: 150,
        allowedOnRoad: true,
        allowsHeavyWaste: false,
        label: 1,
        forbidden: false
    };

    const createMockStore = (selectedSkip?: Skip) => {
        const initialState: SkipState = {
            skips: [],
            loading: false,
            error: null,
            selectedSkip: selectedSkip || null,
        };

        return configureStore({
            reducer: {
                skipSelection: skipReducer
            },
            preloadedState: {
                skipSelection: initialState
            }
        });
    };

    const renderComponent = (
        store: ReturnType<typeof createMockStore>,
        onNext = jest.fn(),
        onBack = jest.fn()
    ) => {
        return render(
            <Provider store={store}>
                <BottomBar onNext={onNext} onBack={onBack} />
            </Provider>
        );
    };

    test('renders nothing when no skip is selected', () => {
        const store = createMockStore(); // No skip passed
        const { container } = renderComponent(store);
        expect(container.firstChild).toBeNull();
    });

    test('renders bottom bar with correct skip information', () => {
        const store = createMockStore(mockSkip);
        renderComponent(store);

        expect(screen.getByText('8')).toBeInTheDocument();
        expect(screen.getByText('7 day hire')).toBeInTheDocument();
        expect(screen.getByText('£')).toBeInTheDocument();
    });

    test('renders back and continue buttons', () => {
        const store = createMockStore(mockSkip);
        renderComponent(store);

        const backButton = screen.getByText('Back');
        const continueButton = screen.getByText('Continue');

        expect(backButton).toBeInTheDocument();
        expect(continueButton).toBeInTheDocument();
        expect(screen.getByTestId('arrow-right-icon')).toBeInTheDocument();
    });

    test('calls onBack when back button is clicked', () => {
        const mockOnBack = jest.fn();
        const store = createMockStore(mockSkip);
        renderComponent(store, jest.fn(), mockOnBack);

        const backButton = screen.getByText('Back');
        fireEvent.click(backButton);

        expect(mockOnBack).toHaveBeenCalledTimes(1);
    });

    test('calls onNext when continue button is clicked', () => {
        const mockOnNext = jest.fn();
        const store = createMockStore(mockSkip);
        renderComponent(store, mockOnNext);

        const continueButton = screen.getByText('Continue');
        fireEvent.click(continueButton);

        expect(mockOnNext).toHaveBeenCalledTimes(1);
    });
});