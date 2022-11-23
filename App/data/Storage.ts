import AsyncStorage from '@react-native-async-storage/async-storage';

export const Storage = {
    get: async (key: string) : Promise<string | null> => {
        return await AsyncStorage.getItem(key);
    },
    set: async (key: string, value: string) => {
        await AsyncStorage.setItem(key, value).then(() => {
            console.log('Stored ', value, ' at ', key);
        }).catch((error: any) => {
            console.log('Error storing data at ', key, error);
        });
    },
};