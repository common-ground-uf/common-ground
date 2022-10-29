import { saulProfile, walterProfile } from '../data/dummyUsers';
import {ProfileScreen} from './ProfileScreen';
import {render} from '@testing-library/react-native';
import React from 'react';

describe('ProfileScreen', () => {
    const dummyNavigation = {
        navigate: '',
    };

    it('Renders user\'s own profile correctly', () => {
        const route = {
            params: {
                profileData: saulProfile,
            },
        };
        const result = render(<ProfileScreen profileData={saulProfile} navigation={dummyNavigation} route={route} />);

        expect(result.toJSON()).toMatchSnapshot();
    });

    it('Renders user\'s own profile correctly', () => {
        const route = {
            params: {
                profileData: walterProfile,
            },
        };
        const result = render(<ProfileScreen profileData={walterProfile} navigation={dummyNavigation} route={route} />);

        expect(result.toJSON()).toMatchSnapshot();
    });
});
