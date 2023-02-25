import { scopedClassMarker } from "../helper/classnames"

describe('scopedClassName', () => {
    it(
        '测试类名',
        () => {
            const sc = scopedClassMarker('gr-layout');
            expect(sc('')).toEqual('gr-layout')
            expect(sc('side')).toEqual('gr-layout-side')
            expect(sc({'name': true})).toEqual('gr-layout-name')
            expect(sc({'name': false})).toEqual('')
        }
    )
})