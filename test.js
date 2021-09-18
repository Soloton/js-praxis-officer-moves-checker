describe('isOfficerMove', function () {
    describe('Valid moves', function () {
        it('from A1 to B2', function () {
            assert.equal(isOfficerMove('a1', 'b2'), true);
        });
        it('from B1 to A2', function () {
            assert.equal(isOfficerMove('b1', 'a2'), true);
        });
        it('from B2 to A1', function () {
            assert.equal(isOfficerMove('b2', 'a1'), true);
        });
        it('from A2 to B1', function () {
            assert.equal(isOfficerMove('a2', 'b1'), true);
        });
    });
    describe('Not valid moves', function () {
        it('from A1 to B1', function () {
            assert.equal(isOfficerMove('a1', 'b1'), false);
        });
        it('from A1 to A2', function () {
            assert.equal(isOfficerMove('a1', 'a2'), false);
        });
        it('from B1 to A1', function () {
            assert.equal(isOfficerMove('b1', 'a1'), false);
        });
        it('from B1 to B2', function () {
            assert.equal(isOfficerMove('b1', 'b2'), false);
        });
        it('from B2 to B1', function () {
            assert.equal(isOfficerMove('b2', 'b1'), false);
        });
        it('from B2 to A2', function () {
            assert.equal(isOfficerMove('b2', 'a2'), false);
        });
        it('from A2 to A1', function () {
            assert.equal(isOfficerMove('a2', 'a1'), false);
        });
        it('from A2 to B2', function () {
            assert.equal(isOfficerMove('a2', 'b2'), false);
        });
    });
});
